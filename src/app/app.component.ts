import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TreeNode } from './tree-comp/tree.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit{
  title = 'treeview-poc';

  treeData = [
    {
      name: 'Node-1',
      id: 1,
      parent_id: null,
    },
    {
      name: 'Node-2',
      id: 2,
      parent_id: null,
    },
    {
      name: 'Node-1-1',
      id: 3,
      parent_id: 1,
    },
    {
      name: 'Node-1-2',
      id: 4,
      parent_id: 1,
    },
    {
      name: 'Node-1-1-1',
      id: 5,
      parent_id: 3,
    },
    {
      name: 'Node-1-1-2',
      id: 6,
      parent_id: 3,
    },
    {
      name: 'Node-1-2-1',
      id: 7,
      parent_id: 4,
    },
    {
      name: 'Node-2-1',
      id: 8,
      parent_id: 2,
    },
    {
      name: 'Node-2-2',
      id: 9,
      parent_id: 2,
    },
  ];
  treeNodes: TreeNode[] = [];
  build = false
  ngOnInit() {
    this.buildTree();
  }
  buildTree() {
    let lookup: any = {};
    this.treeData.forEach(
      (node) => (lookup[node.id] = { ...node, children: [], collapsed: false })
    );

    this.treeData.forEach((node) => {
      if (node.parent_id === null) {
        this.treeNodes.push(lookup[node.id]);
      } else {
        lookup[node.parent_id]?.children.push(lookup[node.id]);
      }
    });
    console.log(this.treeNodes);
    this.build = true
  }
}
