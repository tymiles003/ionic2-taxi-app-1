/**
 * @author    Damien Dell'Amico <damien.dellamico@gmail.com>
 * @copyright Copyright (c) 2016
 * @license   GPL-3.0
 */

// IONIC:

export class ConfigMock {

  public get(): any {
    return '';
  }

  public getBoolean(): boolean {
    return true;
  }

  public getNumber(): number {
    return 1;
  }
}

export class AlertControllerMock {
  create(): any {
    return {};
  }
}

export class NavParamsMock {
  data: any;
}

export class ViewControllerMock {
  dismiss(data?: any, role?: any): Promise<any> {
    return new Promise(function (resolve: Function): void {
      resolve();
    });
  }
}

export class NavMock {

  public pop(): any {
    return new Promise(function (resolve: Function): void {
      resolve();
    });
  }

  public push(): any {
    return new Promise(function (resolve: Function): void {
      resolve();
    });
  }

  public getActive(): any {
    return {
      'instance': {
        'model': 'something',
      },
    };
  }

  public setRoot(): any {
    return true;
  }
}

export class PlatformMock {
  public ready(): any {
    return new Promise((resolve: Function) => {
      resolve();
    });
  }
}

export class LoadingControllerMock {
  create(opts?: any) {
    return {
      present: () => {
      },
      dismiss: () => {
      }
    };
  };
}