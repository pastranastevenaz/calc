import operate from './operate';
import isNumber from './isNumber';










export default function calculate(obj, buttonName){
  if (buttonName === 'AC'){
    return{
      total: null,
      next: null,
      operation: null,
    };
  }

  if (isNumber(buttonName)){
    if (buttonName === '0' && obj.next === '0'){
      return {};
    }
    //if there's an operation update next
    if (obj.operation){
      if(obj.next){
        return{ next: obj.next + buttonName };
      }
      return {next: buttonName};
    }
    // if there's no op, update next and clear the value
    if (obj.next){
      return {
        next: obj.next + buttonName,
        total: null,
      };
    }
    return {
      next: buttonName,
      total: null,
    };
  }

    if (buttonName === '.'){
      if (obj.next){
        if (obj.next.includes('.')){
          return {};
        }
        return { next: obj.next + '.'};
      }
      if (obk.operation) {
        return { next: '0.'};
      }
      if (obj.total){
        if (obj.total.includes('.')){
          return {};
        }
        return {total: obj.total + '.'};
      }
      return {total: '0.'};
    }

    if (buttonName === '='){
      if(obj.next && obj.operation){
        return {
          total: operate(obj.total, obj.next, obj.operation),
          next: null,
          operation: null,
        };
      } else {
        // '=' without an operation, there is nothing to do.
        return {};
      }
    }

    if (buttonName === '+/-'){
      if (obj.next) {
        return {next: (-1 * parseFloat(obj.next)).toString() };
      }
      if (obj.total){
        return {total: (-1 * parseFloat(obj.total)).toString() };
      }
      return {};
    }









    //User presses op button, and there;s already an existing op/
    if (obj.operation){
      return{
        total: operate(obj.total, obj.next, obj.operation),
        next: null,
        operation: buttonName,
      };
    }




    if(!obj.next){
      return {operation: buttonName};
    }

    //save op and shift 'next' into 'total'
    return{
      total: obj.next,
      next: null,
      operation: buttonName,
    };
  }
