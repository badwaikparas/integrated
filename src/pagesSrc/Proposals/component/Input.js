import React from 'react'
import "./input.css"

function Input() {
    return (
        <md-input-container className="md-block flex-gt-sm" flex-gt-sm="">
            <label for="input_24">Subject</label>
            <input ng-model="subject" name="subject" className="ng-pristine ng-untouched ng-valid md-input ng-empty" id="input_24" aria-invalid="false" /><div className="md-errors-spacer"></div>
        </md-input-container>
    )
}

export default Input