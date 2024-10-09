import dateFormat, { masks } from "dateformat";
export function getNow(format) {
    let now = new Date();

    return dateFormat(now, format);
}
