import { Component, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

/**
 * Generated class for the RatingComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 * 
 * --------- Usage --------------------------
 * 
 * <rating [(ngModel)]="rate" 
 *       [readOnly]="false" <!--default value-->
 *       [max]="5" <!--default value-->
 *       color="primary" <!--default value-->
 *       emptyStarIconName="star-outline" <!--default value-->
 *       halfStarIconName="star-half" <!--default value-->
 *       starIconName="star" <!--default value-->
 *       [nullable]="false" <!--default value-->
 *       (ngModelChange)="onModelChange($event)"> <!--use it when you need to do something when user clicks on a star. in case you only need to change ngModel property, this property can be ommited.-->
 * </rating>
 */

@Component({
  selector: 'rating',
  templateUrl: 'rating.html',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => RatingComponent),
    multi: true
  }]
})
export class RatingComponent implements ControlValueAccessor {

  private _max: number = 5;
  private _color: string = 'primary';
  private _readOnly: boolean = false;
  private _emptyStarIconName: string = 'star-outline';
  private _halfStarIconName: string = 'star-half';
  private _starIconName: string = 'star';
  private _nullable: boolean = false;

  innerValue: number;
  starIndexes: Array<number>;
  onChangeCallback: (_: any) => void = () => { };

  ngOnInit() {
    // ngFor needs an array
    this.starIndexes = Array(this.max).fill(1).map((x, i) => i);
  }

  @Input()
  get max(): number {
    return this._max;
  }
  set max(val: number) {
    this._max = val;
  }

  @Input()
  get color(): string {
    return this._color;
  }
  set color(val: string) {
    this._color = val;
  }

  @Input()
  get readOnly(): boolean {
    return this._readOnly;
  }
  set readOnly(val: boolean) {
    this._readOnly = val;
  }

  @Input()
  get emptyStarIconName(): string {
    return this._emptyStarIconName;
  }
  set emptyStarIconName(val: string) {
    this._emptyStarIconName = val;
  }

  @Input()
  get halfStarIconName(): string {
    return this._halfStarIconName;
  }
  set halfStarIconName(val: string) {
    this._halfStarIconName = val;
  }

  @Input()
  get starIconName(): string {
    return this._starIconName;
  }
  set starIconName(val: string) {
    this._starIconName = val;
  }

  @Input()
  get nullable(): boolean {
    return this._nullable;
  }
  set nullable(val: boolean) {
    this._nullable = val;
  }

  get value(): number {
    return this.innerValue;
  }

  set value(value: number) {
    if (value !== this.innerValue) {
      this.innerValue = value;
      this.onChangeCallback(value);
    }
  }

  getStarIconName(starIndex: number) {
    if (this.value === undefined) {
      return this.emptyStarIconName;
    }

    if (this.value > starIndex) {

      if (this.value < starIndex + 1) {
        return this.halfStarIconName;

      } else {
        return this.starIconName;
      }

    } else {
      return this.emptyStarIconName;
    }
  }

  rate(value: number) {
    if (this.readOnly || value < 0 || value > this.max) {
      return;
    }
    if (value === this.value && this.nullable) {
      value = null;
    }
    this.value = value;
  }

  writeValue(value: any): void {
    if (value !== this.innerValue) {
      this.innerValue = value;
    }
  }
  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }
  registerOnTouched(fn: any): void {
    // throw new Error("Method not implemented.");
  }
  setDisabledState?(isDisabled: boolean): void {
    // throw new Error("Method not implemented.");
  }

}
