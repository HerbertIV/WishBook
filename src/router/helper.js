export const prepareUrlToRouter = (url) => {
    let prepareUrl = url.replace(process.env.APP_URL, '');
    if (!prepareUrl) {
        return '/';
    }

    return prepareUrl;
}