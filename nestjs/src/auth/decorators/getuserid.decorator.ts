import { ENUM_USER_ROLES } from './../../types/enums';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { MyContext } from 'src/types/my-context';

export const GetUserId = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const context: MyContext = GqlExecutionContext.create(ctx).getContext();
    return context.req.session['userId'];
  },
);

export const GetCoachId = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const context: MyContext = GqlExecutionContext.create(ctx).getContext();
    return context.req.session['typeId'];
  },
);

export const GetClientId = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const context: MyContext = GqlExecutionContext.create(ctx).getContext();
    console.log(context.req.session)
    return context.req.session['typeId'];
  },
);

export const GetRole = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const context: MyContext = GqlExecutionContext.create(ctx).getContext();
    return context.req.session['role'];
  },
);

export const isUserCoach = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const context: MyContext = GqlExecutionContext.create(ctx).getContext();

    if (context.req.session['role'] === ENUM_USER_ROLES.COACH) return true;
    return false;
  },
);
