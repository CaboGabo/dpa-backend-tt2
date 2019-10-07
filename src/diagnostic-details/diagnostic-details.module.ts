import { Module } from '@nestjs/common';
import { DiagnosticDetailsService } from './diagnostic-details.service';
import { DiagnosticDetailsController } from './diagnostic-details.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DiagnosticDetailEntity } from './diagnostic-detail.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DiagnosticDetailEntity])],
  providers: [DiagnosticDetailsService],
  controllers: [DiagnosticDetailsController],
})
export class DiagnosticDetailsModule {}
