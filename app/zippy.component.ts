import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
    selector: 'zippy',
    template: `
        <div class="zippy">
            <div class="zipp-title">
            </div>
            <div class="zippy-content">
            </div>
        </div>
    `
})

export class ZippyComonent {
    @Input() title: string;
    isExpaned = false;

    toggle()
    {
        this.isExpaned = !this.isExpaned;
    }

}