import { Test, TestingModule } from '@nestjs/testing';
import { WorkoutResolver } from './resolvers/workout.resolver';

describe('WorkoutResolver', () => {
  let resolver: WorkoutResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WorkoutResolver],
    }).compile();

    resolver = module.get<WorkoutResolver>(WorkoutResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
