/*
 * This file contains actions to be exported
 */

export {
    login,
    logout,
    setRedirectPath,
    authFail,
    emptyToken,
    signup,
    socialLogin,
    verifyEmail,
    setPassword
} from './Auth';

export {
    getQuestions
} from './Contests';

export {
    getLeaders
} from './Leaders';

export {
    getWalletDetails,
    getTransactions
} from './Wallet';

export {
    getUnsettledContests,
    getSettledContests
} from './Account';

export {
    setSnackbarMessage,
    updateUserLocation
} from './MainLayout';

export {
    getCards,
    getSocialUrl,
    addCard,
    emptyCards,
    updateCardDetails
} from './MyCards';

export {
    getUserProfile,
    emptyUserProfile,
    updateUserProfile,
    updateSocialUrl
} from './Home';
