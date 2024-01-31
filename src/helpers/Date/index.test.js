import { getMonth } from './index';

describe("Date helper", () => {
  describe("When getMonth is called", () => {
    it("should return 'janvier' for date 2022-01-01", () => {
      const date = new Date('2022-01-01');
    //   test si le mois correspond a la date ici 01 = janvier
      expect(getMonth(date)).toBe('janvier');
    });

    it("should return 'juillet' for date 2022-07-08", () => {
      const date = new Date('2022-07-08');
      //   test si le mois correspond a la date ici 07 = juillet
      expect(getMonth(date)).toBe('juillet');
    });
  });
});