import HeroModule from "./hero";
import HeroController from "./hero.controller";
import HeroComponent from "./hero.component";
import HeroTemplate from "./hero.html";

describe("Hero", () => {
    let $rootScope;
    let makeController;

    beforeEach(window.module(HeroModule));
    beforeEach(inject(_$rootScope_ => {
        $rootScope = _$rootScope_;
        makeController = () => {
            return new HeroController();
        };
    }));

    describe("Module", () => {
        // top-level specs: i.e., routes, injection, naming
    });

    describe("Controller", () => {
        // controller specs
        test("has a name property [REMOVE]", () => {
            // erase if removing this.name from the controller
            const controller = makeController();
            expect(controller).toHaveProperty("name");
        });
    });

    describe("Template", () => {
        // template specs
        // tip: use regex to ensure correct bindings are used e.g., {{  }}
        test("has name in template [REMOVE]", () => {
            expect(HeroTemplate).toMatch(/{{\s?\$ctrl\.name\s?}}/g);
        });
    });

    describe("Component", () => {
        // component/directive specs
        const component = HeroComponent;

        test("includes the intended template", () => {
            expect(component.template).toBe(HeroTemplate);
        });

        test("invokes the right controller", () => {
            expect(component.controller).toBe(HeroController);
        });
    });
});
