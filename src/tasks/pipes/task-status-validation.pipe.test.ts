import * as task_status_validation_pipe from "./task-status-validation.pipe"
// @ponicode
describe("transform", () => {
    let inst: any

    beforeEach(() => {
        inst = new task_status_validation_pipe.TaskStatusValidationPipe()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.transform("FOo")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.transform(false)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst.transform("bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst.transform("elIo")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst.transform("ELIO")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst.transform("")
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("isStatusValid", () => {
    let inst: any

    beforeEach(() => {
        inst = new task_status_validation_pipe.TaskStatusValidationPipe()
    })

    test("0", () => {
        let callFunction: any = () => {
            inst.isStatusValid("canceled")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            inst.isStatusValid(404)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            inst.isStatusValid("pending")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            inst.isStatusValid(200)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction: any = () => {
            inst.isStatusValid([404, 200])
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction: any = () => {
            inst.isStatusValid(NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})
