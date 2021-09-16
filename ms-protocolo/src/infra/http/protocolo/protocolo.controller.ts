import { Controller, Get } from '@nestjs/common';

@Controller('protocolo')
export class ProtocoloController {
    @Get()
    hello():string{
        return "olá mundo";
    }
}
