import { Controller, Post, UseGuards } from '@nestjs/common'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'

// const createQuestionBodySchema = z.object({
//   email: z.string().email(),
//   password: z.string(),
// })

// type createQuestionBodySchema = z.infer<typeof createQuestionBodySchema>

@Controller('/questions')
@UseGuards(JwtAuthGuard)
export class createQuestionController {
  constructor() {}

  @Post()
  async handle() {
    return 'ok'
  }
}
