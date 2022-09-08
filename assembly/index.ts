import { storage, Context } from "near-sdk-as";

class Greeting { 

    getGreeting(accountId: string): string | null { 
        return storage.get<string>(accountId, 
            "Greeting not available"); 
    }

    setGreeting(greeting: string): void { 

        storage.set(Context.sender, greeting);

    } 
}


