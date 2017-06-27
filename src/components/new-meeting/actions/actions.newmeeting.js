import { getPhotoForLocality } from './../api/api.newmeeting';
import { addNewMeeting } from './../api/api.newmeeting';

export function getPhotoForLocalityAction (requestParams) {
    return getPhotoForLocality(requestParams);
}



export function addNewMeetingAction (data) {
    return addNewMeeting(data);
}