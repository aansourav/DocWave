import { Editor } from "@/components/editor/Editor";
import Header from "@/components/Header";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Document = () => {
    return (
        <div>
            <Header />
            <div className="flex w-fit items-center justify-center gap-2">
                <p className="document-title">This is title</p>
            </div>
            <SignedOut>
                <SignInButton />
            </SignedOut>
            <SignedIn>
                <UserButton />
            </SignedIn>
            <Editor />
        </div>
    );
};

export default Document;
