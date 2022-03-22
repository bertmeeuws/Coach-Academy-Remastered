import { Test, TestingModule } from '@nestjs/testing';
import { InviteResolver } from './invite.resolver';
import { InviteService } from './invite.service';

describe('InviteResolver', () => {
  let resolver: InviteResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [InviteResolver, InviteService]
    }).compile();

    resolver = module.get<InviteResolver>(InviteResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
