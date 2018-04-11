    export class ApiCfg {
    public static getApiRoute(route: string) {
        return this.getApiPrefix() + route;
    }

    private static getApiPrefix(): string {
        return 'http://localhost:8080/api';
    }
}
