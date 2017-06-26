import { getPhotoForLocality } from './../api/api.newmeeting';

export function getPhotoForLocalityAction (requestParams) {
    return getPhotoForLocality(requestParams);
}