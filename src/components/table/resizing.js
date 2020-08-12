import {$} from '@core/dom';

export function resizingHendler($root, event) {
    return new Promise((resolve) => {
        const $target = $(event.target);
        const $parent = $target.closest('[data-flag="resizable"]');
        const coordinates = $parent.getCordinates();
        const movetype = $target.dataIndex.resize;
        let pxvalue = null;
        let delta = null;
        const sidePos = movetype === 'col' ? 'bottom' : 'right';
        $target.css({
            opacity: 1,
            zIndex: 1000,
            [sidePos]: '-5000px',
        });
        document.onmousemove = (ev) => {
            if (movetype === 'col') {
                delta = ev.pageX - coordinates.right;
                pxvalue = coordinates.width + delta;
                $target.css({right: -delta + 'px'});
            } else {
                delta = ev.pageY - coordinates.bottom;
                pxvalue = coordinates.height + delta;
                $target.css({bottom: -delta + 'px'});
            }
        };
        document.onmouseup = () => {
            document.onmousemove = null;
            document.onmouseup = null;
            if (movetype === 'col') {
                $parent.css({width: pxvalue + 'px'});
                $root.selectAll(`[data-col="${$parent.dataIndex.col}"]`)
                .forEach((el) => el.style.width = pxvalue + 'px');
            } else {
                $parent.css({height: pxvalue + 'px'});
            }
            resolve({
                value: pxvalue,
                type: movetype,
                id: $parent.dataIndex[movetype],
            });
            $target.css({
                opacity: 0,
                bottom: 0,
                right: 0,
            });
        };
    });
}