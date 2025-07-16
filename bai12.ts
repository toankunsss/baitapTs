function LogClass(constructor: Function) {
  console.log(`Class "${constructor.name}" has been created.`);
}

@LogClass
class MyService {
  constructor() {
    console.log('MyService constructor is running...');
  }
}

const service = new MyService();

function MeasureTime(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.time(propertyKey);
    const result = originalMethod.apply(this, args);
    console.timeEnd(propertyKey);
    return result;
  };

  return descriptor;
}

class MathUtils {
  @MeasureTime
  calculate() {
    // Giả sử làm gì đó tốn thời gian
    for (let i = 0; i < 1e6; i++) {}
  }
}

const utils = new MathUtils();
utils.calculate();

function LogMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Call: ${propertyKey}(${args.join(", ")})`);
    return original.apply(this, args);
  }
}

class Calculator {
  @LogMethod
  add(a: number, b: number) {
    return a + b;
  }
}

new Calculator().add(1, 2)