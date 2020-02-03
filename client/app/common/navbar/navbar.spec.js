import NavbarModule from "./navbar";

describe("Navbar", () => {
    let $rootScope;
    let $state;
    let $location;
    let $componentController;
    let $compile;

    beforeEach(window.module(NavbarModule));

    beforeEach(inject($injector => {
        $rootScope = $injector.get("$rootScope");
        $componentController = $injector.get("$componentController");
        $state = $injector.get("$state");
        $location = $injector.get("$location");
        $compile = $injector.get("$compile");
    }));

    describe("Module", () => {
        // top-level specs: i.e., routes, injection, naming
    });

    describe("Controller", () => {
        // controller specs
        let controller;
        beforeEach(() => {
            controller = $componentController("navbar", {
                $scope: $rootScope.$new()
            });
        });

        test("has a name property", () => {
            // erase if removing this.name from the controller
            expect(controller).toHaveProperty("name");
        });
    });

    describe("View", () => {
        // view layer specs.
        let scope;
        let template;

        beforeEach(() => {
            scope = $rootScope.$new();
            template = $compile("<navbar></navbar>")(scope);
            scope.$apply();
        });

        test("has name in template", () => {
            expect(
                template
                    .find("h1")
                    .find("a")
                    .html()
            ).toBe("navbar");
        });
    });
});
