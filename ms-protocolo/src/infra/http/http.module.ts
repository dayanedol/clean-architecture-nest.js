import { Module } from '@nestjs/common';
import { ProtocoloController } from './protocolo/protocolo.controller';

@Module({
  controllers: [ProtocoloController]
})
export class HttpModule {}
