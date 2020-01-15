import * as handler from '../src/functions/handler';

test('hello', async () => {
    const event = 'null';
    const context = 'context';
    const functionRes = await handler.hello( event, context );

    expect( functionRes.httpResponseCode ).toEqual( 200 );
    expect( typeof( functionRes.body ) ).toEqual( 'string' );
});

test('hello-fail', async () => {
    const event = null;
    const context = 's';
    const functionRes = await handler.hello( event, context );

    expect( functionRes.httpResponseCode ).toEqual( 400 );
})