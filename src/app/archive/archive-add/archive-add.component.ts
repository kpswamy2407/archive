import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import {NgxSpinnerService} from 'ngx-spinner';
import {ApiHandlerService} from '../../common/api-handler.service';
@Component({
  selector: 'app-archive-add',
  templateUrl: './archive-add.component.html',
  styleUrls: ['./archive-add.component.css']
})
export class ArchiveAddComponent implements OnInit {
	serverConfigForm: FormGroup;
  constructor(private fb: FormBuilder,private spinner: NgxSpinnerService,private http:ApiHandlerService) { 
	this.serverConfigForm=fb.group({
		'database_config': fb.group({
			'mysql_source_host':[null,[Validators.required]],
			'mysql_source_username':[null,[Validators.required]],
			'mysql_source_password':[null],
			'mysql_source_port':[null,[Validators.required]],
			'mysql_source_database':[null,[Validators.required]],
			'mysql_destination_host':[null,[Validators.required]],
			'mysql_destination_username':[null,[Validators.required]],
			'mysql_destination_password':[null],
			'mysql_destination_port':[null,[Validators.required]],
			'mysql_destination_database':[null,[Validators.required]]
			}),
		
		'tableConfig':fb.array([
			fb.group({
				'source_table':[null,Validators.required],
				'destination_table':[null,Validators.required],
				'create_destination_table_if_not_exists':[null],
				'related_tables':[null],
				'condition':[null,Validators.required],
			}),
		]),
	});
  }

  ngOnInit() {
  }
  getTitle(): String{
		return "Database Configuration";
  }
	get DC(): any {
		return this.serverConfigForm.get('database_config');
	}
	getTcFormArray(){
		return this.serverConfigForm.get('tableConfig') as FormArray;
	}
	addTableConfig(){
		this.getTcFormArray().push(
			this.fb.group({
				'source_table':[null,Validators.required],
				'destination_table':[null,Validators.required],
				'create_destination_table_if_not_exists':[null],
				'related_tables':[null],
				'condition':[null,Validators.required],
			})
		);
	}
	delTableConfig(index: number){
		if(this.getTcFormArray().length>1){
			this.getTcFormArray().removeAt(index);
		}else{
			alert("Cannot remove the last instance.");
		}
	}
	onSubmit(){
		if(this.serverConfigForm.valid){
			/** spinner starts on init */
			this.spinner.show();
			let databaseConfig=new Map();
			let tableConfig=new Map();
			tableConfig.set(this.serverConfigForm.get('database_config.mysql_source_database').value,this.serverConfigForm.get('tableConfig').value);
			databaseConfig.set(this.serverConfigForm.get('database_config.mysql_source_database').value,this.serverConfigForm.get('database_config').value);
			
			debugger;
			this.http.postData('db/archive-manual',[{'database_config':databaseConfig,'table_config':tableConfig}]).subscribe(data=>{
				console.log(data);
			});
			
			this.spinner.hide();
			
		}
		console.log(this.serverConfigForm.controls['tableConfig'].status);
	}
}
