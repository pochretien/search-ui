import { $$ } from '../../../src/utils/Dom';
import { NoNameFacetHeader } from '../../../src/ui/NoNameFacet/NoNameFacetHeader/NoNameFacetHeader';
import { INoNameFacetOptions } from '../../../src/ui/NoNameFacet/NoNameFacetOptions';

export function NoNameFacetHeaderTest() {
  describe('NoNameFacetHeader', () => {
    let noNameFacetHeader: NoNameFacetHeader;
    let baseOptions: INoNameFacetOptions;

    beforeEach(() => {
      baseOptions = {
        title: 'Best facet'
      };
      initializeComponent();
    });

    function initializeComponent() {
      noNameFacetHeader = new NoNameFacetHeader(baseOptions);
    }

    it('should create an accessible title', () => {
      const titleElement = $$(noNameFacetHeader.element).find('.coveo-facet-header-title');

      expect($$(titleElement).text()).toBe(baseOptions.title);
      expect($$(titleElement).getAttribute('role')).toBe('heading');
      expect($$(titleElement).getAttribute('aria-level')).toBe('2');
      expect($$(titleElement).getAttribute('aria-label')).toBeTruthy();
    });

    it('should create a hidden waitAnimationElement', () => {
      const waitAnimationElement = $$(noNameFacetHeader.element).find('.coveo-facet-header-wait-animation');

      expect($$(waitAnimationElement).isVisible()).toBe(false);
    });

    it(`when calling showLoading
      waitAnimationElement show be visible after the delay`, done => {
      const waitAnimationElement = $$(noNameFacetHeader.element).find('.coveo-facet-header-wait-animation');
      noNameFacetHeader.showLoading();
      expect($$(waitAnimationElement).isVisible()).toBe(false);

      setTimeout(() => {
        expect($$(waitAnimationElement).isVisible()).toBe(true);
        done();
      }, NoNameFacetHeader.showLoadingDelay + 1);
    });

    it('should create an accessible hidden clear button', () => {
      const clearElement = $$(noNameFacetHeader.element).find('.coveo-facet-header-eraser');

      expect($$(clearElement).getAttribute('aria-label')).toBeTruthy();
      expect($$(clearElement).getAttribute('title')).toBeTruthy();
      expect($$(clearElement).isVisible()).toBe(false);
    });

    it(`when calling showClear
      the clear button should be visible`, () => {
      const clearElement = $$(noNameFacetHeader.element).find('.coveo-facet-header-eraser');

      noNameFacetHeader.showClear();

      expect($$(clearElement).isVisible()).toBe(true);
    });

    it(`when passing the option enableCollapse (true)
      should display the accessible collapse & expand buttons`, () => {
      baseOptions.enableCollapse = true;
      initializeComponent();

      const collapseElement = $$(noNameFacetHeader.element).find('.coveo-facet-header-collapse');
      const expandElement = $$(noNameFacetHeader.element).find('.coveo-facet-header-expand');

      expect(collapseElement).toBeTruthy();
      expect(expandElement).toBeTruthy();
    });
  });
}