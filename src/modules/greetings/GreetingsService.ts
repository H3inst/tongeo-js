export class GreetingsService
{
    public async sendGreetings(name?: string): Promise<string>
    {
        if (name)
        {
            return `Hello ${name}, this is tongeo-js!`;
        }
        return "Hello from tongeo-js!";
    }
}