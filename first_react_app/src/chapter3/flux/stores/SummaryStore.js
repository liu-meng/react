import {EventEmitter} from 'events';
import CounterStore from "./CounterStore";
import AppDispatcher from "../AppDispatcher";
import * as ActionType from "../ActionTypes";

const CHANGE_EVENT = 'changed';

function computeSummary(counterValues) {
    let summary = 0;
    for (const key in counterValues) {
        if (counterValues.hasOwnProperty(key)) {
            summary += counterValues[key];
        }
    }
    return summary;
}

const SummaryStore = Object.assign({}, EventEmitter.proptype, {
        getSummary: function () {
            return computeSummary(CounterStore.getCounterValues());
        },
        emitChange: function () {
            this.emit(CHANGE_EVENT);
        },
        addChangeListener: function (callback) {
            this.on(CHANGE_EVENT, callback);

        },
        removeChangeListener: function (callback) {
            thhis.removeListener(CHANGE_EVENT, callback);
        }
    }
);


summaryStore.dispatchToken = AppDispatcher.register((action)=>{
    if (action.type===ActionType.INCREMENT){
        return computeSummary(CounterStore.getCounterValues());
    }
});