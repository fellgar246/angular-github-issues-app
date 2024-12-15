import { sleep } from "@helpers/sleep";
import { GithubLabel } from "../interfaces";
import { environment } from "src/environments/environment.development";

const BASE_URL = environment.baseUrl;
const GITHUB_TOKEN = environment.gitHubToken;

export const getLabels = async(): Promise<GithubLabel[]> => {

    try {
        const resp = await fetch(`${BASE_URL}/labels`, {
            headers: {
                Authorization: `Bearer ${GITHUB_TOKEN}`,
            },
        });

        if(!resp.ok) {
            throw "Can't get labels";
        }

        const labels: GithubLabel[] = await resp.json();

        return labels;

    } catch (error) {
        throw "Can't get labels";
    }
}
