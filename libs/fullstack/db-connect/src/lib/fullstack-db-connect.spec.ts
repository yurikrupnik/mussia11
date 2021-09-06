import dbConnect from './fullstack-db-connect';

describe('fullstackDbConnect', () => {
  it('should work', () => {
    // expect(dbConnect('my url')).toEqual('fullstack-db-connect');
    expect(dbConnect('my url')).toBeCalled();
  });
});
