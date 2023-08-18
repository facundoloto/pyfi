export default abstract class Dao {
  abstract save(...args: any[]): Promise<unknown>;

  abstract delete(...args: any[]): Promise<unknown>;

  abstract update(...args: any[]): Promise<unknown>;

  abstract findById(...args: any[]): Promise<unknown>;

}
