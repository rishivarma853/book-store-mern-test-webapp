export default class Config {
    static PORT = process.env.PORT || 4000;
    static MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/book-store';
    static getPORT() { return Config.PORT; }
}
