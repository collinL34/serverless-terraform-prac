import { success, failure } from "../utilities/httpResponse";

export async function hello(event, context) {
  try {
    if ( event === null || context === null ) {
      throw {
        message: `Error please try again`
      };
    }

    return success(
      {
        message: event,
        context: context
      }
    );
  } catch( err ) {
    return failure(
      err
    );
  }
};
