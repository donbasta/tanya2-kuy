import { Document } from "mongoose";
import { IQuestionDocument } from "./questions.types";

export async function setLastUpdated(this: IQuestionDocument): Promise<void> {
    const now = new Date();
    if (!this.lastUpdated || this.lastUpdated < now) {
        this.lastUpdated = now;
        await this.save();
    }
}

export async function updateIsAnswered(this: IQuestionDocument): Promise<void> {
    if (!this.isAnswered) {
        this.isAnswered = true;
        await this.save();
    }
}