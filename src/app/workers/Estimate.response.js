
import { UPDATE_FILE_INFO, UPDATE_FILE_PROCESSING } from 'app/actions/fileInfoActions';
import reduxStore from 'app/store/redux';

export const estimateResponseHandler = ({ data }) => {
    const reduxPayload = {
        ...data,
        fileProcessing: false
    };
    reduxStore.dispatch({
        type: UPDATE_FILE_INFO,
        payload: reduxPayload
    });
    reduxStore.dispatch({
        type: UPDATE_FILE_PROCESSING,
        payload: {
            value: false
        }
    });
};
