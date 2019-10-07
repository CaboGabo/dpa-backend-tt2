import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { StudentsModule } from './students/students.module';
import { PsychologistsModule } from './psychologists/psychologists.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { HttpErrorFilter } from './shared/http-error.filter';
import { LoggingInterceptor } from './shared/logging.interceptor';
import { PostsModule } from './posts/posts.module';
import { ClassificationCriteriaModule } from './classification-criteria/classification-criteria.module';
import { KeyPhrasesModule } from './key-phrases/key-phrases.module';
import { SpecialistsModule } from './specialists/specialists.module';
import { GeneralDataModule } from './general-data/general-data.module';
import { SuggestionsModule } from './suggestions/suggestions.module';
import { DiagnosticsModule } from './diagnostics/diagnostics.module';
import { AuthModule } from './auth/auth.module';
import { ActivitiesModule } from './activities/activities.module';
import { DiagnosticDetailsModule } from './diagnostic-details/diagnostic-details.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule,
    StudentsModule,
    PsychologistsModule,
    PostsModule,
    ClassificationCriteriaModule,
    KeyPhrasesModule,
    SpecialistsModule,
    GeneralDataModule,
    SuggestionsModule,
    DiagnosticsModule,
    AuthModule,
    ActivitiesModule,
    DiagnosticDetailsModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    { provide: APP_FILTER, useClass: HttpErrorFilter },
    { provide: APP_INTERCEPTOR, useClass: LoggingInterceptor },
  ],
})
export class AppModule {}
