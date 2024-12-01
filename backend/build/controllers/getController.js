export default class GetController {
    static get(request, response) {
        return response.status(200).send("Hello world");
    }
}
