import {combineReducers} from 'redux'
import courses from './CourseReducer'
import authors from './AuthorReducer'
import numAjaxCallsInProgress from './AjaxStatusReducer'

const rootReducer = combineReducers({
    courses,
    authors,
    numAjaxCallsInProgress
})

export default rootReducer