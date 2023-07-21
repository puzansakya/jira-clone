import {ENGLISH_DATE} from "./english_date";
import {NEPALI_DATE} from "./nepali_date";
import * as from_domains from "../domains";


export const integration = (params: from_domains.INormalizedDate) => {

    NEPALI_DATE.render_grid(params)
    ENGLISH_DATE.render_grid(params)

}