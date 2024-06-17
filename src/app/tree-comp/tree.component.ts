import { CdkDragDrop, moveItemInArray, transferArrayItem } from "@angular/cdk/drag-drop";
import { CommonModule } from "@angular/common";
import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";

@Component({
    selector:'tree-comp',
    templateUrl:'./tree.component.html',
    styleUrls:['./tree.component.scss']
})

export class TreeViewComponent  {

    @Input() treeData: TreeNode[] = [];
  
    
  
    drop(event: CdkDragDrop<any>, parentNode?: TreeNode,cp?:any) {
      if (event.previousContainer === event.container) {
        moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
        transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        event.container.data[event.currentIndex].parent_id = parentNode ? parentNode.id : null;
      }
    }
    toggleNode(node: TreeNode) {
        node.collapsed = !node.collapsed;  // Toggle the collapsed state
      }
  }
export interface TreeNode {
    name: string;
    id: number;
    parent_id: number | null;
    children?: TreeNode[];
    collapsed?: boolean; 
  }