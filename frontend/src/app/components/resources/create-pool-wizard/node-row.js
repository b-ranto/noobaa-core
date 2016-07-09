import BaseViewModel from 'base-view-model';
import ko from 'knockout';
import { formatSize } from 'utils';

export default class NodeRowViewModel extends BaseViewModel {
    constructor(node) {
        super();

        this.isVisible = ko.pureComputed(
            () => !!node()
        );

        this.name = ko.pureComputed(
            () => node() && node().name
        );

        this.ip = ko.pureComputed(
            () => node() && node().ip
        );

        this.capacity = ko.pureComputed(
            () => node() && (node().storage ? formatSize(node().storage.total) : 'N/A')
        );

        this.currPool = ko.pureComputed(
            () => node() && node().pool
        );
    }
}