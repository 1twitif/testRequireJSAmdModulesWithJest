const app = require('./module.js');
const mockedDep = {'answer':'Find The Question !'};
const appWithMock = app.mockable(mockedDep);

test('test in jest', () => {
	expect(app.theAnswer()).toBe(42);
});
test('test in jest with mocked dep', () => {
	expect(appWithMock.theAnswer()).toBe(mockedDep.answer);
});
