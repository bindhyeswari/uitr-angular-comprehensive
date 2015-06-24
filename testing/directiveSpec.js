describe('Directives', function () {
    var element;
    beforeEach(function () {
        var element = angular.element('<div>{{10*9*8}}</div>');
    });
    it('should equal 4', function () {
        expect(element.html()).toBe('720');
    });
});