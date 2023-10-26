/* eslint-disable @typescript-eslint/no-unused-vars */
export const TransformDocumentId = {
  virtuals: true,
  transform: (doc: any, ret: any) => {
    const { _id, __v, ...ret$ } = ret;
    return { ...ret$, id: ret._id };
  },
};
