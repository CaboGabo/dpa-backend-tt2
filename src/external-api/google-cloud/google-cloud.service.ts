import { Injectable } from '@nestjs/common';
import * as language from '@google-cloud/language';
import * as automl from '@google-cloud/automl';

@Injectable()
export class GoogleCloudService {
  private languageClient: any;
  private automlClient: any;

  constructor() {
    this.languageClient = new language.LanguageServiceClient();
    this.automlClient = new automl.PredictionServiceClient();
  }

  public async analyzePost(post: string): Promise<any> {
    const features = {
      extractSyntax: true,
      extractEntities: false,
      extractDocumentSentiment: true,
      extractEntitySentiment: false,
      classifyText: false,
    };

    const document = {
      content: post,
      type: 'PLAIN_TEXT',
    };

    const [result] = await this.languageClient.analyzeSentiment({ document });
    const sentiment = result.documentSentiment;
    return sentiment;
  }

  public async predictPost(post: any): Promise<any> {
    const projectId = process.env.PROJECT_ID;
    const computeRegion = process.env.COMPUTE_REGION;
    const modelId = process.env.MODEL_ID;
    const modelFullId = this.automlClient.modelPath(
      projectId,
      computeRegion,
      modelId,
    );

    const params = {};

    //const postb64 = Buffer.from(post).toString('base64');

    //payload.image = { imageBytes: postb64 };

    const payload = {
      textSnippet: {
        content: post,
        mimeType: 'text/plain',
      },
    };

    const [response] = await this.automlClient.predict({
      name: modelFullId,
      payload,
      params,
    });

    if (
      response.payload[0].classification.score >
      response.payload[1].classification.score
    ) {
      return 'Sin depresión';
    } else {
      return 'Posible depresión';
    }
  }
}
