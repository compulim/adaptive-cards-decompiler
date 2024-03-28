import { Fragment, memo, useMemo, useState } from 'react';

import './App.css';
import CodePanel from './CodePanel';

const DEFAULT_HTML =
  '<div class="ac-container ac-adaptiveCard" style="display: flex; flex-direction: column; justify-content: flex-start; box-sizing: border-box; flex: 0 0 auto; padding: 10px; margin: 0px; background-color: rgb(255, 255, 255);"><div class="ac-textBlock" role="heading" aria-level="2" style="overflow: hidden; font-family: Calibri, sans-serif; font-size: 21px; color: rgb(0, 0, 0); font-weight: 600; text-align: start; line-height: 27.93px; overflow-wrap: break-word; box-sizing: border-box; flex: 0 0 auto;"><p style="margin-top: 0px; width: 100%; margin-bottom: 0px;">Your Flight Update</p></div><div class="ac-horizontal-separator" aria-hidden="true" style="height: 8px; overflow: hidden; flex: 0 0 auto; display: flex; margin-right: 0px; margin-left: 0px;"></div><div role="table" style="display: flex; flex-direction: column; box-sizing: border-box; flex: 0 0 auto; padding: 0px; margin: 0px;"><div role="row" style="display: flex; flex-direction: row; box-sizing: border-box; flex: 0 0 auto; padding: 0px; margin: 0px;"><div class="ac-container" role="columnheader" scope="col" style="display: flex; flex-direction: column; justify-content: flex-start; min-width: 0px; box-sizing: border-box; flex: 1 1 33.3333%; padding: 0px; margin: 0px;"><div style="display: flex; align-items: flex-start; justify-content: flex-start; box-sizing: border-box; flex: 0 0 auto;"><img class="ac-image" src="https://adaptivecards.io/content/airplane.png" alt="Airplane" style="min-width: 0px; width: 40px; max-height: 100%;"></div></div><div class="ac-container" role="columnheader" scope="col" style="display: flex; flex-direction: column; justify-content: flex-start; min-width: 0px; box-sizing: border-box; flex: 1 1 33.3333%; padding: 0px; margin: 0px 0px 0px 8px;"></div><div class="ac-container" role="columnheader" scope="col" style="display: flex; flex-direction: column; justify-content: flex-start; min-width: 0px; box-sizing: border-box; flex: 1 1 33.3333%; padding: 0px; margin: 0px 0px 0px 8px;"><div class="ac-textBlock" style="overflow: hidden; font-family: Calibri, sans-serif; font-size: 14px; color: rgb(111, 111, 111); font-weight: 600; text-align: end; line-height: 18.62px; overflow-wrap: break-word; box-sizing: border-box; flex: 0 0 auto;"><p style="margin-top: 0px; width: 100%; margin-bottom: 0px;">Flight Status</p></div><div class="ac-textBlock" style="overflow: hidden; font-family: Calibri, sans-serif; font-size: 21px; color: rgb(236, 19, 14); font-weight: 600; text-align: end; line-height: 27.93px; overflow-wrap: break-word; box-sizing: border-box; flex: 0 0 auto;"><p style="margin-top: 0px; width: 100%; margin-bottom: 0px;">DELAYED</p></div></div></div><div aria-hidden="true" style="height: 8px;"></div><div role="row" style="display: flex; flex-direction: row; box-sizing: border-box; flex: 0 0 auto; padding: 0px; margin: 0px;"><div class="ac-container" role="cell" style="display: flex; flex-direction: column; justify-content: flex-start; min-width: 0px; box-sizing: border-box; flex: 1 1 33.3333%; padding: 0px; margin: 0px;"><div class="ac-textBlock" style="overflow: hidden; font-family: Calibri, sans-serif; font-size: 14px; color: rgb(111, 111, 111); font-weight: 600; text-align: start; line-height: 18.62px; overflow-wrap: break-word; box-sizing: border-box; flex: 0 0 auto;"><p style="margin-top: 0px; width: 100%; margin-bottom: 0px;">Flight</p></div><div class="ac-horizontal-separator" aria-hidden="true" style="height: 3px; overflow: hidden; flex: 0 0 auto; margin-right: 0px; margin-left: 0px;"></div><div class="ac-textBlock" style="overflow: hidden; font-family: Calibri, sans-serif; font-size: 14px; color: rgb(0, 0, 0); font-weight: 400; text-align: start; line-height: 18.62px; overflow-wrap: break-word; box-sizing: border-box; flex: 0 0 auto;"><p style="margin-top: 0px; width: 100%; margin-bottom: 0px;">KL605</p></div></div><div class="ac-container" role="cell" style="display: flex; flex-direction: column; justify-content: flex-start; min-width: 0px; box-sizing: border-box; flex: 1 1 33.3333%; padding: 0px; margin: 0px 0px 0px 8px;"><div class="ac-textBlock" style="overflow: hidden; font-family: Calibri, sans-serif; font-size: 14px; color: rgb(111, 111, 111); font-weight: 600; text-align: center; line-height: 18.62px; overflow-wrap: break-word; box-sizing: border-box; flex: 0 0 auto;"><p style="margin-top: 0px; width: 100%; margin-bottom: 0px;">Departs</p></div><div class="ac-horizontal-separator" aria-hidden="true" style="height: 3px; overflow: hidden; flex: 0 0 auto; margin-right: 0px; margin-left: 0px;"></div><div class="ac-textBlock" style="overflow: hidden; font-family: Calibri, sans-serif; font-size: 14px; color: rgb(236, 19, 14); font-weight: 600; text-align: center; line-height: 18.62px; overflow-wrap: break-word; box-sizing: border-box; flex: 0 0 auto;"><p style="margin-top: 0px; width: 100%; margin-bottom: 0px;">2:20 AM</p></div></div><div class="ac-container" role="cell" style="display: flex; flex-direction: column; justify-content: flex-start; min-width: 0px; box-sizing: border-box; flex: 1 1 33.3333%; padding: 0px; margin: 0px 0px 0px 8px;"><div class="ac-textBlock" style="overflow: hidden; font-family: Calibri, sans-serif; font-size: 14px; color: rgb(111, 111, 111); font-weight: 600; text-align: end; line-height: 18.62px; overflow-wrap: break-word; box-sizing: border-box; flex: 0 0 auto;"><p style="margin-top: 0px; width: 100%; margin-bottom: 0px;">Arrives</p></div><div class="ac-horizontal-separator" aria-hidden="true" style="height: 3px; overflow: hidden; flex: 0 0 auto; margin-right: 0px; margin-left: 0px;"></div><div class="ac-textBlock" style="overflow: hidden; font-family: Calibri, sans-serif; font-size: 14px; color: rgb(236, 19, 14); font-weight: 600; text-align: end; line-height: 18.62px; overflow-wrap: break-word; box-sizing: border-box; flex: 0 0 auto;"><p style="margin-top: 0px; width: 100%; margin-bottom: 0px;">8:20 PM</p></div></div></div><div aria-hidden="true" style="height: 8px;"></div><div role="row" style="display: flex; flex-direction: row; box-sizing: border-box; flex: 0 0 auto; padding: 0px; margin: 0px;"><div class="ac-container" role="cell" style="display: flex; flex-direction: column; justify-content: flex-start; min-width: 0px; box-sizing: border-box; flex: 1 1 33.3333%; padding: 0px; margin: 0px;"><div class="ac-textBlock" style="overflow: hidden; font-family: Calibri, sans-serif; font-size: 14px; color: rgb(111, 111, 111); font-weight: 600; text-align: start; line-height: 18.62px; overflow-wrap: break-word; box-sizing: border-box; flex: 0 0 auto;"><p style="margin-top: 0px; width: 100%; margin-bottom: 0px;">Passengers</p></div></div><div class="ac-container" role="cell" style="display: flex; flex-direction: column; justify-content: flex-start; min-width: 0px; box-sizing: border-box; flex: 1 1 33.3333%; padding: 0px; margin: 0px 0px 0px 8px;"></div><div class="ac-container" role="cell" style="display: flex; flex-direction: column; justify-content: flex-start; min-width: 0px; box-sizing: border-box; flex: 1 1 33.3333%; padding: 0px; margin: 0px 0px 0px 8px;"><div class="ac-textBlock" style="overflow: hidden; font-family: Calibri, sans-serif; font-size: 14px; color: rgb(111, 111, 111); font-weight: 600; text-align: end; line-height: 18.62px; overflow-wrap: break-word; box-sizing: border-box; flex: 0 0 auto;"><p style="margin-top: 0px; width: 100%; margin-bottom: 0px;">Seat</p></div></div></div><div aria-hidden="true" style="height: 8px;"></div><div role="row" style="display: flex; flex-direction: row; box-sizing: border-box; flex: 0 0 auto; padding: 0px; margin: 0px;"><div class="ac-container" role="cell" style="display: flex; flex-direction: column; justify-content: flex-start; min-width: 0px; box-sizing: border-box; flex: 1 1 33.3333%; padding: 0px; margin: 0px;"><div class="ac-textBlock" style="overflow: hidden; font-family: Calibri, sans-serif; font-size: 14px; color: rgb(0, 0, 0); font-weight: 400; text-align: start; line-height: 18.62px; overflow-wrap: break-word; box-sizing: border-box; flex: 0 0 auto;"><p style="margin-top: 0px; width: 100%; margin-bottom: 0px;">Sarah Hum</p></div></div><div class="ac-container" role="cell" style="display: flex; flex-direction: column; justify-content: flex-start; min-width: 0px; box-sizing: border-box; flex: 1 1 33.3333%; padding: 0px; margin: 0px 0px 0px 8px;"></div><div class="ac-container" role="cell" style="display: flex; flex-direction: column; justify-content: flex-start; min-width: 0px; box-sizing: border-box; flex: 1 1 33.3333%; padding: 0px; margin: 0px 0px 0px 8px;"><div class="ac-textBlock" style="overflow: hidden; font-family: Calibri, sans-serif; font-size: 14px; color: rgb(0, 0, 0); font-weight: 400; text-align: end; line-height: 18.62px; overflow-wrap: break-word; box-sizing: border-box; flex: 0 0 auto;"><p style="margin-top: 0px; width: 100%; margin-bottom: 0px;">14A</p></div></div></div><div aria-hidden="true" style="height: 8px;"></div><div role="row" style="display: flex; flex-direction: row; box-sizing: border-box; flex: 0 0 auto; padding: 0px; margin: 0px;"><div class="ac-container" role="cell" style="display: flex; flex-direction: column; justify-content: flex-start; min-width: 0px; box-sizing: border-box; flex: 1 1 33.3333%; padding: 0px; margin: 0px;"><div class="ac-textBlock" style="overflow: hidden; font-family: Calibri, sans-serif; font-size: 14px; color: rgb(0, 0, 0); font-weight: 400; text-align: start; line-height: 18.62px; overflow-wrap: break-word; box-sizing: border-box; flex: 0 0 auto;"><p style="margin-top: 0px; width: 100%; margin-bottom: 0px;">Jeremy Goldberg</p></div></div><div class="ac-container" role="cell" style="display: flex; flex-direction: column; justify-content: flex-start; min-width: 0px; box-sizing: border-box; flex: 1 1 33.3333%; padding: 0px; margin: 0px 0px 0px 8px;"></div><div class="ac-container" role="cell" style="display: flex; flex-direction: column; justify-content: flex-start; min-width: 0px; box-sizing: border-box; flex: 1 1 33.3333%; padding: 0px; margin: 0px 0px 0px 8px;"><div class="ac-textBlock" style="overflow: hidden; font-family: Calibri, sans-serif; font-size: 14px; color: rgb(0, 0, 0); font-weight: 400; text-align: end; line-height: 18.62px; overflow-wrap: break-word; box-sizing: border-box; flex: 0 0 auto;"><p style="margin-top: 0px; width: 100%; margin-bottom: 0px;">14B</p></div></div></div><div aria-hidden="true" style="height: 8px;"></div><div role="row" style="display: flex; flex-direction: row; box-sizing: border-box; flex: 0 0 auto; padding: 0px; margin: 0px;"><div class="ac-container" role="cell" style="display: flex; flex-direction: column; justify-content: flex-start; min-width: 0px; box-sizing: border-box; flex: 1 1 33.3333%; padding: 0px; margin: 0px;"><div class="ac-textBlock" style="overflow: hidden; font-family: Calibri, sans-serif; font-size: 14px; color: rgb(0, 0, 0); font-weight: 400; text-align: start; line-height: 18.62px; overflow-wrap: break-word; box-sizing: border-box; flex: 0 0 auto;"><p style="margin-top: 0px; width: 100%; margin-bottom: 0px;">Evan Litvak</p></div></div><div class="ac-container" role="cell" style="display: flex; flex-direction: column; justify-content: flex-start; min-width: 0px; box-sizing: border-box; flex: 1 1 33.3333%; padding: 0px; margin: 0px 0px 0px 8px;"></div><div class="ac-container" role="cell" style="display: flex; flex-direction: column; justify-content: flex-start; min-width: 0px; box-sizing: border-box; flex: 1 1 33.3333%; padding: 0px; margin: 0px 0px 0px 8px;"><div class="ac-textBlock" style="overflow: hidden; font-family: Calibri, sans-serif; font-size: 14px; color: rgb(0, 0, 0); font-weight: 400; text-align: end; line-height: 18.62px; overflow-wrap: break-word; box-sizing: border-box; flex: 0 0 auto;"><p style="margin-top: 0px; width: 100%; margin-bottom: 0px;">14C</p></div></div></div><div aria-hidden="true" style="height: 8px;"></div><div role="row" style="display: flex; flex-direction: row; box-sizing: border-box; flex: 0 0 auto; padding: 0px; margin: 0px;"><div class="ac-container" role="cell" style="display: flex; flex-direction: column; justify-content: flex-start; min-width: 0px; box-sizing: border-box; flex: 1 1 33.3333%; padding: 0px; margin: 0px;"><div class="ac-textBlock" style="overflow: hidden; font-family: Calibri, sans-serif; font-size: 14px; color: rgb(111, 111, 111); font-weight: 400; text-align: start; line-height: 18.62px; overflow-wrap: break-word; box-sizing: border-box; flex: 0 0 auto;"><p style="margin-top: 0px; width: 100%; margin-bottom: 0px;">Amsterdam Airport</p></div><div class="ac-textBlock" style="overflow: hidden; font-family: Calibri, sans-serif; font-size: 26px; color: rgb(0, 99, 177); font-weight: 400; text-align: start; line-height: 34.58px; overflow-wrap: break-word; box-sizing: border-box; flex: 0 0 auto;"><p style="margin-top: 0px; width: 100%; margin-bottom: 0px;">AMS</p></div></div><div class="ac-container" role="cell" style="display: flex; flex-direction: column; justify-content: center; min-width: 0px; box-sizing: border-box; flex: 1 1 33.3333%; padding: 0px; margin: 0px 0px 0px 8px;"><div style="display: flex; align-items: flex-start; justify-content: center; box-sizing: border-box; flex: 0 0 auto;"><img class="ac-image" src="https://adaptivecards.io/content/airplane.png" alt="Airplane" style="min-width: 0px; width: 40px; max-height: 100%;"></div></div><div class="ac-container" role="cell" style="display: flex; flex-direction: column; justify-content: flex-start; min-width: 0px; box-sizing: border-box; flex: 1 1 33.3333%; padding: 0px; margin: 0px 0px 0px 8px;"><div class="ac-textBlock" style="overflow: hidden; font-family: Calibri, sans-serif; font-size: 14px; color: rgb(111, 111, 111); font-weight: 400; text-align: end; line-height: 18.62px; overflow-wrap: break-word; box-sizing: border-box; flex: 0 0 auto;"><p style="margin-top: 0px; width: 100%; margin-bottom: 0px;">San Francisco Airport</p></div><div class="ac-textBlock" style="overflow: hidden; font-family: Calibri, sans-serif; font-size: 26px; color: rgb(0, 99, 177); font-weight: 400; text-align: end; line-height: 34.58px; overflow-wrap: break-word; box-sizing: border-box; flex: 0 0 auto;"><p style="margin-top: 0px; width: 100%; margin-bottom: 0px;">SFO</p></div></div></div></div></div>';

function* htmlCollectionToIterable(children: HTMLCollection): IterableIterator<HTMLElement> {
  for (let index = 0, { length } = children; index < length; index++) {
    const child = children.item(index) as HTMLElement | null;

    if (child) {
      yield child;
    }
  }
}

export default memo(function App() {
  const [error, setError] = useState<string | undefined>(undefined);
  const [html, setHTML] = useState<string>(DEFAULT_HTML);

  const json = useMemo<string | void>(() => {
    setError(undefined);

    const parser = new DOMParser();

    const doc = parser.parseFromString(html, 'text/html');

    const firstElementChild = doc.body.firstElementChild as HTMLElement | undefined;

    if (!firstElementChild || !firstElementChild.classList.contains('ac-adaptiveCard')) {
      return setError('First element must has class of "ac-adaptiveCard".');
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const walk = (htmlElement: HTMLElement): any => {
      const { classList } = htmlElement;

      if (classList.contains('ac-container') && !htmlElement.getAttribute('role')) {
        const isAdaptiveCard = classList.contains('ac-adaptiveCard');

        const childCardElements = [];
        const { children: childHTMLElements } = htmlElement;

        for (const childHTMLElement of htmlCollectionToIterable(childHTMLElements)) {
          childCardElements.push(walk(childHTMLElement));
        }

        return {
          ...(isAdaptiveCard
            ? {
                type: 'AdaptiveCard',
                $schema: 'http://adaptivecards.io/schemas/adaptive-card.json',
                version: '1.5',
                body: childCardElements.filter(Boolean)
              }
            : { type: 'Container', items: childCardElements.filter(Boolean) }),
          width:
            htmlElement.style.flex === '0 1 auto'
              ? 'auto'
              : htmlElement.style.flexGrow === '1'
                ? 'stretch'
                : (htmlElement.style.flexBasis || '').endsWith('px')
                  ? htmlElement.style.flexBasis
                  : +htmlElement.style.flexBasis,
          selectAction: classList.contains('ac-selectable') ? { type: 'Action.Submit' } : undefined
        };
      } else if (classList.contains('ac-columnSet')) {
        const childCardElements = [];
        const { children: childHTMLElements } = htmlElement;

        for (const childHTMLElement of htmlCollectionToIterable(childHTMLElements)) {
          childCardElements.push(walk(childHTMLElement));
        }

        return {
          type: 'ColumnSet',
          separator: !!htmlElement.querySelector('& > .ac-vertical-separator'),
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          columns: childCardElements.filter(Boolean).map((cardElement: any) => ({
            type: 'Column',
            selectAction: cardElement.selectAction,
            width: cardElement.width,
            items: cardElement.items
          }))
        };
      } else if (classList.contains('ac-textBlock')) {
        const {
          role,
          style: { color, fontSize, textAlign }
        } = htmlElement;

        return {
          type: 'TextBlock',
          color: color === 'rgb(236, 19, 14)' ? 'Attention' : color === 'rgb(111, 111, 111)' ? 'Light' : undefined,
          style: role === 'heading' ? 'heading' : undefined,
          horizontalAlignment:
            textAlign === 'center'
              ? 'center'
              : textAlign === 'start'
                ? 'left'
                : textAlign === 'end'
                  ? 'right'
                  : undefined,
          size:
            fontSize === '24px'
              ? 'extraLarge'
              : fontSize === '21px'
                ? 'large'
                : fontSize === '17px'
                  ? 'medium'
                  : fontSize === '12px'
                    ? 'small'
                    : undefined,
          weight:
            +htmlElement.style.fontWeight > 500 ? 'bolder' : +htmlElement.style.fontWeight < 500 ? 'lighter' : 'normal',
          text: htmlElement.textContent?.trim()
        };
      } else if (classList.contains('ac-vertical-separator')) {
        return undefined;
      } else if (classList.contains('ac-horizontal-separator')) {
        return undefined;
      } else if (htmlElement.querySelector('& > .ac-image')) {
        const {
          style: { justifyContent }
        } = htmlElement;
        const imageElement = htmlElement.querySelector('& > .ac-image') as HTMLElement | undefined;

        return imageElement
          ? {
              type: 'Image',
              horizontalAlignment:
                justifyContent === 'center' ? 'Center' : justifyContent === 'flex-end' ? 'Right' : 'Left',
              url: imageElement.getAttribute('src'),
              altText: imageElement.getAttribute('alt'),
              height: imageElement.style.height || undefined,
              width: imageElement.style.width || undefined
            }
          : undefined;
      } else if (htmlElement.querySelector('.ac-actionSet')) {
        const actionSetElement = htmlElement.querySelector('.ac-actionSet');

        if (actionSetElement) {
          const actions = [];

          for (const action of htmlCollectionToIterable(actionSetElement.children)) {
            if (action.classList.contains('ac-pushButton')) {
              actions.push({
                type: 'Action.Submit',
                tooltip: action.getAttribute('title'),
                title: action.textContent?.trim(),
                mode: action.classList.contains('secondary') ? 'secondary' : undefined,
                style: action.classList.contains('style-positive')
                  ? 'positive'
                  : action.classList.contains('style-destructive')
                    ? 'destructive'
                    : undefined
              });
            }
          }

          return {
            type: 'ActionSet',
            actions
          };
        }

        return undefined;
      } else if (htmlElement.getAttribute('role') === 'table') {
        return {
          type: 'Table',
          showGridLines: !!htmlElement.style.borderTop,
          columns: new Array(
            [...htmlCollectionToIterable(htmlElement.children)].reduce(
              (maxColumn, row) => Math.max(maxColumn, row.childElementCount),
              0
            )
          ).fill(1),
          rows: [...htmlCollectionToIterable(htmlElement.children)].map(walk)
        };
      } else if (htmlElement.getAttribute('role') === 'row') {
        return {
          type: 'TableRow',
          cells: [...htmlCollectionToIterable(htmlElement.children)].map(walk)
        };
      } else if (htmlElement.getAttribute('role') === 'columnheader' || htmlElement.getAttribute('role') === 'cell') {
        return {
          type: 'TableCell',
          items: [...htmlCollectionToIterable(htmlElement.children)].map(walk)
        };
      }
    };

    const json = walk(firstElementChild);

    return JSON.stringify(json, null, 2);
  }, [html, setError]);

  return (
    <Fragment>
      <main className="app">
        <h1 className="app__header">Adaptive Cards extractor</h1>
        <div className="app__two-pane">
          <CodePanel name="HTML" onInput={setHTML} value={html} />
          <CodePanel name="JSON" readOnly={true} value={json || error || ''} />
        </div>
      </main>
    </Fragment>
  );
});
