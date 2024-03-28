import { Fragment, memo, useMemo, useState } from 'react';

import './App.css';
import CodePanel from './CodePanel';

const DEFAULT_HTML =
  '<div class="ac-container ac-adaptiveCard" style="display: flex; flex-direction: column; justify-content: flex-start; box-sizing: border-box; flex: 0 0 auto; padding: 10px; margin: 0px; background-color: rgb(255, 255, 255);"><div class="ac-textBlock" role="heading" aria-level="2" style="overflow: hidden; font-family: Calibri, sans-serif; font-size: 17px; color: rgb(0, 0, 0); font-weight: 600; text-align: start; line-height: 22.61px; overflow-wrap: break-word; box-sizing: border-box; flex: 0 0 auto;"><p style="margin-top: 0px; width: 100%; margin-bottom: 0px;">Publish Adaptive Card Schema</p></div><div class="ac-horizontal-separator" aria-hidden="true" style="height: 8px; overflow: hidden; flex: 0 0 auto; display: flex; margin-right: 0px; margin-left: 0px;"></div><div class="ac-columnSet" style="display: flex; justify-content: flex-start; box-sizing: border-box; flex: 0 0 auto; padding: 0px; margin: 0px;"><div class="ac-container" style="display: flex; flex-direction: column; justify-content: flex-start; box-sizing: border-box; min-width: 0px; flex: 0 1 auto; padding: 0px; margin: 0px;"><div style="display: flex; align-items: flex-start; justify-content: flex-start; box-sizing: border-box; flex: 0 0 auto;"></div></div><div class="ac-vertical-separator" aria-hidden="true" style="width: 8px; overflow: hidden; flex: 0 0 auto; display: flex;"></div><div class="ac-container" style="display: flex; flex-direction: column; justify-content: flex-start; box-sizing: border-box; min-width: 0px; flex: 1 1 50px; padding: 0px; margin: 0px;"><div class="ac-textBlock" style="overflow: hidden; font-family: Calibri, sans-serif; font-size: 14px; color: rgb(0, 0, 0); font-weight: 600; text-align: start; line-height: 18.62px; overflow-wrap: break-word; box-sizing: border-box; flex: 0 0 auto;"><p style="margin-top: 0px; width: 100%; margin-bottom: 0px;">Matt Hidinger</p></div><div class="ac-textBlock" style="overflow: hidden; font-family: Calibri, sans-serif; font-size: 14px; color: rgb(111, 111, 111); font-weight: 400; text-align: start; line-height: 18.62px; overflow-wrap: break-word; box-sizing: border-box; flex: 0 0 auto;"><p style="margin-top: 0px; width: 100%; margin-bottom: 0px;">Created Mon, Feb 13, 2017</p></div></div></div><div class="ac-horizontal-separator" aria-hidden="true" style="height: 8px; overflow: hidden; flex: 0 0 auto; margin-right: 0px; margin-left: 0px;"></div><div class="ac-textBlock" style="overflow: hidden; font-family: Calibri, sans-serif; font-size: 14px; color: rgb(0, 0, 0); font-weight: 400; text-align: start; line-height: 18.62px; overflow-wrap: break-word; box-sizing: border-box; flex: 0 0 auto;"><p style="margin-top: 0px; width: 100%; margin-bottom: 0px;">Now that we have defined the main rules and features of the format, we need to produce a schema and publish it to GitHub. The schema will be the starting point of our reference documentation.</p></div><div class="ac-horizontal-separator" aria-hidden="true" style="height: 8px; overflow: hidden; flex: 0 0 auto; display: block; margin-right: 0px; margin-left: 0px;"></div><table class="ac-factset" role="presentation" style="border-width: 0px; border-spacing: 0px; border-style: none; border-collapse: collapse; display: block; overflow: hidden; box-sizing: border-box; flex: 0 0 auto;"><tr><td class="ac-fact-title" style="padding: 0px; max-width: 150px; vertical-align: top;"><div class="ac-textBlock" style="overflow: hidden; font-family: Calibri, sans-serif; font-size: 14px; color: rgb(0, 0, 0); font-weight: 600; text-align: start; line-height: 18.62px; overflow-wrap: break-word; box-sizing: border-box; flex: 0 0 auto;"><p style="margin-top: 0px; width: 100%; margin-bottom: 0px;">Board:</p></div></td><td style="width: 10px;"></td><td class="ac-fact-value" style="padding: 0px; vertical-align: top;"><div class="ac-textBlock" style="overflow: hidden; font-family: Calibri, sans-serif; font-size: 14px; color: rgb(0, 0, 0); font-weight: 400; text-align: start; line-height: 18.62px; overflow-wrap: break-word; box-sizing: border-box; flex: 0 0 auto;"><p style="margin-top: 0px; width: 100%; margin-bottom: 0px;">Adaptive Cards</p></div></td></tr><tr style="margin-top: 8px;"><td class="ac-fact-title" style="padding: 0px; max-width: 150px; vertical-align: top;"><div class="ac-textBlock" style="overflow: hidden; font-family: Calibri, sans-serif; font-size: 14px; color: rgb(0, 0, 0); font-weight: 600; text-align: start; line-height: 18.62px; overflow-wrap: break-word; box-sizing: border-box; flex: 0 0 auto;"><p style="margin-top: 0px; width: 100%; margin-bottom: 0px;">List:</p></div></td><td style="width: 10px;"></td><td class="ac-fact-value" style="padding: 0px; vertical-align: top;"><div class="ac-textBlock" style="overflow: hidden; font-family: Calibri, sans-serif; font-size: 14px; color: rgb(0, 0, 0); font-weight: 400; text-align: start; line-height: 18.62px; overflow-wrap: break-word; box-sizing: border-box; flex: 0 0 auto;"><p style="margin-top: 0px; width: 100%; margin-bottom: 0px;">Backlog</p></div></td></tr><tr style="margin-top: 8px;"><td class="ac-fact-title" style="padding: 0px; max-width: 150px; vertical-align: top;"><div class="ac-textBlock" style="overflow: hidden; font-family: Calibri, sans-serif; font-size: 14px; color: rgb(0, 0, 0); font-weight: 600; text-align: start; line-height: 18.62px; overflow-wrap: break-word; box-sizing: border-box; flex: 0 0 auto;"><p style="margin-top: 0px; width: 100%; margin-bottom: 0px;">Assigned to:</p></div></td><td style="width: 10px;"></td><td class="ac-fact-value" style="padding: 0px; vertical-align: top;"><div class="ac-textBlock" style="overflow: hidden; font-family: Calibri, sans-serif; font-size: 14px; color: rgb(0, 0, 0); font-weight: 400; text-align: start; line-height: 18.62px; overflow-wrap: break-word; box-sizing: border-box; flex: 0 0 auto;"><p style="margin-top: 0px; width: 100%; margin-bottom: 0px;">Matt Hidinger</p></div></td></tr><tr style="margin-top: 8px;"><td class="ac-fact-title" style="padding: 0px; max-width: 150px; vertical-align: top;"><div class="ac-textBlock" style="overflow: hidden; font-family: Calibri, sans-serif; font-size: 14px; color: rgb(0, 0, 0); font-weight: 600; text-align: start; line-height: 18.62px; overflow-wrap: break-word; box-sizing: border-box; flex: 0 0 auto;"><p style="margin-top: 0px; width: 100%; margin-bottom: 0px;">Due date:</p></div></td><td style="width: 10px;"></td><td class="ac-fact-value" style="padding: 0px; vertical-align: top;"><div class="ac-textBlock" style="overflow: hidden; font-family: Calibri, sans-serif; font-size: 14px; color: rgb(0, 0, 0); font-weight: 400; text-align: start; line-height: 18.62px; overflow-wrap: break-word; box-sizing: border-box; flex: 0 0 auto;"><p style="margin-top: 0px; width: 100%; margin-bottom: 0px;">Not set</p></div></td></tr></table><div class="ac-horizontal-separator" aria-hidden="true" style="height: 8px; overflow: hidden; flex: 0 0 auto;"></div><div><div style="overflow: hidden;"><div class="ac-actionSet" style="display: flex; flex-direction: column; align-items: stretch;"><button type="button" class="ac-pushButton style-default expandable ac-selectable" tabindex="0" aria-expanded="false" role="button" aria-label="Set due date" title="Set due date" style="display: flex; align-items: center; justify-content: center; flex: 0 1 auto;"><div style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">Set due date</div></button><div style="height: 8px;"></div><button type="button" class="ac-pushButton style-default ac-selectable" tabindex="0" role="button" aria-label="View" title="View" style="display: flex; align-items: center; justify-content: center; flex: 0 1 auto;"><div style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">View</div></button></div></div><div></div></div></div>';

function* htmlCollectionToIterable(children: HTMLCollection): IterableIterator<HTMLElement> {
  for (let index = 0, { length } = children; index < length; index++) {
    const child = children.item(index) as HTMLElement | null;

    if (child) {
      yield child;
    }
  }
}

function* nodeListToIterable(children: NodeListOf<HTMLElement>): IterableIterator<HTMLElement> {
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
          separator: [
            ...nodeListToIterable(
              htmlElement.querySelectorAll('& > .ac-vertical-separator, & > .ac-horizontal-separate')
            )
          ].some(separator => !!separator.style.border),
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
            parseInt(fontSize) >= 24
              ? 'extraLarge'
              : parseInt(fontSize) >= 21
                ? 'large'
                : parseInt(fontSize) >= 17
                  ? 'medium'
                  : parseInt(fontSize) <= 12
                    ? 'small'
                    : undefined,
          weight:
            +htmlElement.style.fontWeight > 400 ? 'bolder' : +htmlElement.style.fontWeight < 400 ? 'lighter' : 'normal',
          wrap: htmlElement.style.textOverflow ? undefined : true,
          text: htmlElement.textContent?.trim()
        };
      } else if (classList.contains('ac-vertical-separator')) {
        return undefined;
      } else if (classList.contains('ac-horizontal-separator')) {
        return undefined;
      } else if (classList.contains('ac-factset')) {
        return {
          type: 'FactSet',
          facts: [...nodeListToIterable(htmlElement.querySelectorAll('tbody > tr'))].map(row => ({
            title: row.querySelector('& > .ac-fact-title')?.textContent,
            value: row.querySelector('& > .ac-fact-value')?.textContent
          }))
        };
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
        <h1 className="app__header">Adaptive Cards decompiler</h1>
        <div className="app__two-pane">
          <CodePanel name="HTML" onInput={setHTML} value={html} />
          <CodePanel name="JSON" readOnly={true} value={json || error || ''} />
        </div>
      </main>
    </Fragment>
  );
});
