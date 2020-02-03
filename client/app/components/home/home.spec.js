import HomeModule from "./home";

describe("Home", () => {
    let $rootScope;
    let $state;
    let $location;
    let $componentController;
    let $compile;

    beforeEach(window.module(HomeModule));

    beforeEach(inject($injector => {
        $rootScope = $injector.get("$rootScope");
        $componentController = $injector.get("$componentController");
        $state = $injector.get("$state");
        $location = $injector.get("$location");
        $compile = $injector.get("$compile");
    }));

    describe("Module", () => {
        // top-level specs: i.e., routes, injection, naming
        test("default component should be home", () => {
            $location.url("/");
            $rootScope.$digest();
            expect($state.current.component).toBe("home");
        });
    });

    describe("Controller", () => {
        // controller specs
        let controller;
        beforeEach(() => {
            controller = $componentController("home", {
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
            template = $compile("<home></home>")(scope);
            scope.$apply();
        });

        test("has name in template", () => {
            expect(template.find("h1").html()).toBe("Found in home.html");
        });
    });
});
