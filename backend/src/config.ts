
export default class Config
{
    private static readonly PORT: string | number = process.env.PORT || 4000;
    private static readonly MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/book-store';
    public static getPORT(): string | number { return Config.PORT; }
}