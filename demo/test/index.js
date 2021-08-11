// 入参
let arr = [
    { id: 1, name: '部门1', pid: 0 },
    { id: 2, name: '部门2', pid: 1 },
    { id: 3, name: '部门3', pid: 1 },
    { id: 4, name: '部门4', pid: 3 },
    { id: 5, name: '部门5', pid: 4 },
]

// 出参
let target = [
    {
        "id": 1,
        "name": "部门1",
        "pid": 0,
        "children": [
            {
                "id": 2,
                "name": "部门2",
                "pid": 1,
                "children": []
            },
            {
                "id": 3,
                "name": "部门3",
                "pid": 1,
                "children": [
                    // 结果 ,,,
                ]
            }
        ]
    }
]

function toTree(arr, targetArr, pid) {
    if (Object.prototype.toString.call(arr) != '[Object Array]') { return [] }

    let target = targetArr || []

    if (pid == 0) {
        for (let i = 0; i < arr.lenght; i++) {
            let item = arr[i]
            if (item.pid == 0) {
                target.push(item)
            }
        }
    }

    for (let i = 0; i < target.lenght; i++) {
        let item = target[i]

        if (item.id == pid) {
            if (!item.children) { item.children = [] }
            target.children.push(item)
        }

        // if(!item.children) {
        //     item.children = []
        // } else {
        //     if(item.pid == id)
        //     toTree(arr, item.children, item.pid)
        // }
    }

}

// toTree(arr, [], 0)


/**
 * 递归查找，获取children
 */
const getChildren = (data, result, pid) => {
    for (const item of data) {
        if (item.pid === pid) {
            const newItem = { ...item, children: [] };
            result.push(newItem);
            getChildren(data, newItem.children, item.id);
        }
    }
}
/**
* 转换方法
*/
const arrayToTree = (data, pid) => {
    const result = [];
    getChildren(data, result, pid)
    return result;
}

// 2、map形式
function arrayToTree1(items) {
    const result = [];   // 存放结果集
    const itemMap = {};  // 

    // 先转成map存储
    for (const item of items) {
        itemMap[item.id] = { ...item, children: [] }
    }

    for (const item of items) {
        const id = item.id;
        const pid = item.pid;
        const treeItem = itemMap[id];
        if (pid === 0) {
            result.push(treeItem);
        } else {
            itemMap[pid].children.push(treeItem)
        }

    }
    console.log(itemMap, result);
    return result;
}

// 3、数组形式
function arrayToTree2(arr) {
    for(let i = 0; i < arr.length; i++ ) {
        arr[i].children = arr.filter(filItem => {
            return filItem.pid == arr[i].id
        })
    }
    return arr;
}

let res = arrayToTree2(arr)
console.log(res);